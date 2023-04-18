import { useEffect, useState } from "react";
import { PhotoItem } from "../types/Photo";

import {
  Camera,
  Photo,
  CameraResultType,
  CameraSource,
} from "@capacitor/camera";
import { isPlatform } from "@ionic/react";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";

const PHOTO_PREF_KEY = "photos";

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_PREF_KEY });
      // const photosInPrefs: PhotoItem[] = value ? JSON.parse(value) : [];
      console.log("line 23, value load saved", value);

      if (!isPlatform("hybrid")) {
      }
    };

    loadSaved();
  }, []);

  useEffect(() => {
    Preferences.set({ key: PHOTO_PREF_KEY, value: JSON.stringify(photos) });
  }, [photos]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    console.log("file: use Photo ~ takePhoto", takePhoto);

    const fileName = new Date().getTime() + ".jpeg";


    // const saveFileImage = {filepath: fileName, webviewPath: photo.webPath}
    const savedFileImage = await savePhoto(photo, fileName);

    console.log("file: usePhotoGallery, line 24, ", savedFileImage);

    setPhotos([savedFileImage, ...photos]);

    return {photos, takePhoto};
  };

  const savePhoto = async (
    photo: Photo,
    fileName: string
  ): Promise<PhotoItem> => {
    let base64Data: string;

    if (isPlatform("hybrid")) {
      const file = await Filesystem.readFile({
        path: photo.path!,
        directory: Directory.Data
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      directory: Directory.Data,
      data: base64Data,
    });

    console.log("Line 53: saved files", savedFile);

    if (isPlatform("hybrid")) {
      return {
        filePath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }

    return {
      filePath: fileName,
      webviewPath: photo.webPath,
    };
  };

  async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob: Blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(`method did not return a string`);
        }
      };

      reader.readAsDataURL(blob);
    });
  }

  const deletePhoto = async (fileName: string) => {
    setPhotos(photos.filter((photo) => photo.filePath !== fileName));

    await Filesystem.deleteFile({
      path: fileName,
      directory: Directory.Data,
    });
  };

  return { photos, takePhoto, deletePhoto };
};
