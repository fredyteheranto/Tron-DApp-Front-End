import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    
    allergyForm: FormGroup;
    isSmallScreen: boolean;
    
    categories = [
        {id:1,name:"Drug Allergy"},
        {id:2,name:"Food Allergy"},
        {id:3,name:"Insect Allergy"},
        {id:4,name:"Mold Allergy"},
        {id:5,name:"Pet Allergy"},
        {id:6,name:"Pollen Allergy"}
    ];
    
    severities = [
        {id:1,description:"Low"},
        {id:2,description:"Medium"},
        {id:3,description:"High"}
    ];

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

        this.titleService.setTitle("Update Allergy Profile");
        this.meta.addTags([
          { name: 'robots', content: 'noindex' },
          { httpEquiv: 'Content-Type', content: 'text/html'},
          { charset: 'UTF-8'},
          { property: 'og:title', content: "Update Allergy Profile"},
          { name: 'description', content: 'Maintain your allergy profile on Health Port.' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
        ], true);
    }

	ngOnInit() {

        this.isSmallScreen = (window.innerWidth) < 1280;

        this.allergyForm = this.fb.group({
            allergies: this.fb.array([this.fb.group({substance:'',category:'',severity:'',reactions:''})])
          });
          this.allergyData.push(this.fb.group({substance:'',category:'',severity:'',reactions:''}));
          this.allergyData.push(this.fb.group({substance:'',category:'',severity:'',reactions:''}));
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
      
    get allergyData() {
        return this.allergyForm.get('allergies') as FormArray;
      }
    
    addMore() {
        this.allergyData.push(this.fb.group({substance:'',category:'',severity:'',reactions:''}));
    }

}