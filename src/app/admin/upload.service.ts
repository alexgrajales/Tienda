import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { upload } from "../models/upload";
import { AngularFirestore } from "angularfire2/firestore";
import * as faker from "faker";

@Injectable()
export class UploadService {

  private 
  constructor(private afs: AngularFirestore) { }
} 
