import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-medicationlist',
  templateUrl: './medicationlist.component.html',
  styleUrls: ['./medicationlist.component.scss']
})
export class MedicationlistComponent implements OnInit {
  
  medicationForm: FormGroup;
  isSmallScreen: boolean;

  /**
   * Constructor
   *
   * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
   */
  constructor(
    private meta: Meta,
    private fb: FormBuilder,
    private titleService:Title,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService
  ) 
  { 
    this._fuseTranslationLoaderService.loadTranslations(english, turkish);

    this.titleService.setTitle("Update Medication List");
    this.meta.addTags([
      { name: 'robots', content: 'noindex' },
      { httpEquiv: 'Content-Type', content: 'text/html'},
      { charset: 'UTF-8'},
      { property: 'og:title', content: "Update Medication List"},
      { name: 'description', content: 'Maintain your medication list on Health Port.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
    ], true);
  }

  ngOnInit() {
    
    this.isSmallScreen = (window.innerWidth) < 1280;

    this.medicationForm = this.fb.group({
      medications: this.fb.array([this.fb.group({name:'',dose:'',frequency:'',physician:''})])
    });
    this.medicationData.push(this.fb.group({name:'',dose:'',frequency:'',physician:''}));
    this.medicationData.push(this.fb.group({name:'',dose:'',frequency:'',physician:''}));
    
  }

  isVisible(index) {
    if(index < 1 && !this.isSmallScreen) {
      return true
    }
    else if (this.isSmallScreen) {
      return true;
    }
    else {
      return false;
    }
  }

  get medicationData() {
    return this.medicationForm.get('medications') as FormArray;
  }

  addMore() {
    this.medicationData.push(this.fb.group({name:'',dose:'',frequency:'',physician:''}));
  }
}
