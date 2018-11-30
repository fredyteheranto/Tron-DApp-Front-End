import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-procedure-history',
  templateUrl: './procedure-history.component.html',
  styleUrls: ['./procedure-history.component.scss']
})
export class ProcedureHistoryComponent implements OnInit {
  /* const dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    data: { name: 'Juan Manuel', animal: 'Perro' },
    hasBackdrop: false
}); */
  procedureForm: FormGroup;

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
    this.procedureForm = this.fb.group({
      procedures: this.fb.array([this.fb.group({procedure:'',date:''})])
    });
    this.procedureData.push(this.fb.group({procedure:'',date:''}));
    this.procedureData.push(this.fb.group({procedure:'',date:''}));
  }

  get procedureData() {
    return this.procedureForm.get('procedures') as FormArray;
  }
  addMore() {
    this.procedureData.push(this.fb.group({procedure:'',date:''}));
  }
  testing(item){
    item;
    debugger
  }
}
