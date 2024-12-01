import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';



@Component({
  selector: 'app-etudiantajout',
  templateUrl: './etudiantajout.component.html',
  styleUrls: ['./etudiantajout.component.scss']
})
export class EtudiantajoutComponent implements OnInit {
  mainForm!: FormGroup;

 
  

  etudiantInfoForm!: FormGroup;
  nomEtudiantCtrl!: FormControl;
  prenoEtutiantCtrl!: FormControl;
  dateNaissanceCtrl!: FormControl;

  genreFormGroup!: FormGroup;

  hideMereInformationCtrl!: FormControl;
  mereFormGroup!: FormGroup;
  nomMereCtrl!:FormControl;
  numeroMereCtrl!:FormControl;
  professionMereCtrl!:FormControl;
  
  hidePereInformationCtrl!: FormControl;
  pereFormGroup!: FormGroup;
  nomPereCtrl!: FormControl;
  numeroPereCtrl!: FormControl;
  professionPereCtrl!: FormControl;

  tuteurFormGroup!: FormGroup;
  nomTuteurCtrl!: FormControl;
  numeroTuteurCtrl!: FormControl;
  professionTuteurCtrl!: FormControl;


  errorNomEtudiant!: string;
  errorPrenomEtudiant!: string;
  errorDateNaissance!: string;
  errorAdresseEtudiant!: string;
  errorNomMere!: string;
  errorNumeroMere!: string;
  errorNomPere!: string;
  errorNumeroPere!: string;
  errorNomTuteur!: string;
  errorNumeroTuteur!: string;


  hideMereInformation$!: Observable<boolean>;
  isInfoMereHidden:boolean = false;
  hidePereInformation$!: Observable<boolean>;
  isInfoPereHidden:boolean = false;

  numeroRegexp: RegExp = /^0(32|33|34|37|38|39)[0-9]{7}$/;

  ngOnInit(): void {
    this.initFormControl();
  }

  constructor(private formBuilder: FormBuilder) { }

  private initFormControl() {
    this.nomEtudiantCtrl = this.formBuilder.control('', Validators.required);
    this.prenoEtutiantCtrl = this.formBuilder.control('', Validators.required);
    this.dateNaissanceCtrl = this.formBuilder.control('', [Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]);

    this.genreFormGroup = this.formBuilder.group({
      genre: this.formBuilder.control('M', Validators.required),
    })

    this.hideMereInformationCtrl = this.formBuilder.control('');
    this.hidePereInformationCtrl = this.formBuilder.control('');

    this.initMereFormControl();
    this.initPereFormControl();
    this.initTuteurFormControl();

    this.mainForm = this.formBuilder.group({
      nom: this.nomEtudiantCtrl,
      prenom: this.prenoEtutiantCtrl,
      dateNaissance: this.dateNaissanceCtrl,
      genreGroup: this.genreFormGroup,
      adresse: this.formBuilder.control('', Validators.required),
      hideMereInformation: this.hideMereInformationCtrl,
      mereFormGroup: this.mereFormGroup,
      hidePereInformation: this.hidePereInformationCtrl,
      pereFormGroup: this.pereFormGroup,
      tuteurFormGroup: this.tuteurFormGroup,
      noteSupplementaire: this.formBuilder.control('')
    });



    this.hideMereInformation$ = this.hideMereInformationCtrl.valueChanges.pipe(
      startWith(this.hideMereInformationCtrl.value),
      tap((valeur) => {
        this.isInfoMereHidden = valeur;
        // reset tout les champs information mere si mere inconnue
        if(valeur){
          this.nomMereCtrl.setValue('');
          this.numeroMereCtrl.setValue('');
          this.professionMereCtrl.setValue('');

          //suppression des erreurs au cas affichees
          this.errorNomMere = '';
          this.errorNumeroMere = '';

          //suppression validator
          this.nomMereCtrl.clearValidators();
          this.numeroMereCtrl.clearValidators;
          
        }else{
          //ajout validator
          this.nomMereCtrl.addValidators(Validators.required);
          this.numeroMereCtrl.addValidators( Validators.pattern(this.numeroRegexp))
        }
        this.addInitTuteurFormGroupValidators(valeur && this.isInfoPereHidden);
        this.nomMereCtrl.updateValueAndValidity();
        this.numeroMereCtrl.updateValueAndValidity();
      })
    );

    this.hidePereInformation$ = this.hidePereInformationCtrl.valueChanges.pipe(
      startWith(this.hidePereInformationCtrl.value),
      tap((valeur) => {
        this.isInfoPereHidden = valeur;
        // reset tout les champs information mere si mere inconnue
        if(valeur){
          this.nomPereCtrl.setValue('');
          this.numeroPereCtrl.setValue('');
          this.professionPereCtrl.setValue('');

          //suppression des erreurs
          this.errorNomPere = '';
          this.errorNumeroPere = '';

          //suppression validator
          this.nomPereCtrl.clearValidators();
          this.numeroPereCtrl.clearValidators();         
        }else{
          //ajout validator
          this.nomPereCtrl.addValidators(Validators.required);
          this.numeroPereCtrl.addValidators( Validators.pattern(this.numeroRegexp))
        }

        this.addInitTuteurFormGroupValidators(this.isInfoMereHidden && valeur);
        this.nomPereCtrl.updateValueAndValidity();
        this.numeroPereCtrl.updateValueAndValidity();
      })
    );

  }


  private initMereFormControl(){
    this.nomMereCtrl = this.formBuilder.control('');
    this.numeroMereCtrl = this.formBuilder.control('');
    this.professionMereCtrl = this.formBuilder.control('');

    this.mereFormGroup = this.formBuilder.group({
      nomMere: this.nomMereCtrl,
      numeroMere: this.numeroMereCtrl,
      professionMere: this.professionMereCtrl
    });
  }


  private initPereFormControl(){
    this.nomPereCtrl = this.formBuilder.control('');
    this.numeroPereCtrl = this.formBuilder.control('');
    this.professionPereCtrl = this.formBuilder.control('');

    this.pereFormGroup = this.formBuilder.group({
      nomPere: this.nomPereCtrl,
      numeroPere: this.numeroPereCtrl,
      professionPere : this.professionPereCtrl
    });
  }


  private initTuteurFormControl(){
    this.nomTuteurCtrl = this.formBuilder.control('');
    this.numeroTuteurCtrl = this.formBuilder.control('');
    this.professionTuteurCtrl = this.formBuilder.control('');

    this.tuteurFormGroup = this.formBuilder.group({
      nomTuteur: this.nomTuteurCtrl,
      numeroTuteur: this.numeroTuteurCtrl,
      professionTuteur: this.professionTuteurCtrl,
    })

  }

  private addInitTuteurFormGroupValidators(isToshowTuteurFormGroup: boolean){
    if(isToshowTuteurFormGroup){
      this.nomTuteurCtrl.addValidators(Validators.required);
      this.numeroTuteurCtrl.addValidators(Validators.pattern(this.numeroRegexp));
    }else{
      this.nomTuteurCtrl.clearValidators();
      this.numeroTuteurCtrl.clearValidators();
      this.nomTuteurCtrl.setValue('');
      this.numeroTuteurCtrl.setValue('');

      //suppression erreur affichee;
      this.errorNomTuteur =  '';
      this.errorNumeroTuteur = '';
    }
    this.nomTuteurCtrl.updateValueAndValidity();
    this.numeroTuteurCtrl.updateValueAndValidity();
  }

  onSubmit() {
    // console.log('je suis la dedant');
    // console.log(this.mainForm.value);
    // console.log('valeur => ' + this.mainForm.get('dateNaissance')?.hasError('required'));
    // console.log('valeur voalohany=> ' + this.mereFormGroup.get('numeroMere')?.value.match(/[0-9]{2}/));
    // console.log('valeur date=> ' + this.mereFormGroup.get('numeroMere')?.hasError('pattern'));
    // console.log(typeof (this.mainForm.get('nom') as FormControl));


    this.gestionErroNomEtPrenomEtudiant();
    this.gestionErrorDateNaissanceEtudiant();
    this.gestionErrorAdresseEtudiant();
    this.gestionErrorNomMere();
    this.gestionErrorNumeroMere();
    this.gestionErrorNomPere();
    this.gestionErrorNumeroPere();
    this.gestionErrorNomTuteur();
    this.gestionErrorNumeroTuteur();

    if(this.mainForm.valid){
      console.log(this.mainForm.value);
    }else
      console.log("Main form n'est pas validée: " + this.mainForm.value);


  }

  private gestionErroNomEtPrenomEtudiant() {
    //verification du champs nom etudiant
    if (this.mainForm.get('nom')?.hasError('required')) {
      this.errorNomEtudiant = 'Le nom doit être précisé!'
    } else {
      this.errorNomEtudiant = '';
    }

    //verification du champs prenom etudiant
    if (this.mainForm.get('prenom')?.hasError('required')) {
      this.errorPrenomEtudiant = 'Le prenom doit être précisé!'
    } else {
      this.errorPrenomEtudiant = '';
    }
  }

  private gestionErrorDateNaissanceEtudiant(){
    if(this.mainForm.get('dateNaissance')?.hasError('required')){
      this.errorDateNaissance = 'La date de naissance doit être précisée!';
    }else if (this.mainForm.get('dateNaissance')?.hasError('pattern')){
      this.errorDateNaissance = 'La date n\'a pas le bon format jour/mois/année!';
    }else{
      this.errorDateNaissance = '';
    }
  }

  private gestionErrorAdresseEtudiant(){
    if(this.mainForm.get('adresse')?.hasError('required')){
      this.errorAdresseEtudiant = 'L\'adresse de l\'étudiant doit être précisée!';
    }else{
      this.errorAdresseEtudiant = '';
    }
  }


  private gestionErrorNomMere(){
    if(this.mereFormGroup.get('nomMere')?.hasError('required')){
      this.errorNomMere = 'Le nom de la mère doit être précisé!'
    }else
      this.errorNomMere = '';
  }

  private gestionErrorNumeroMere(){
    if(this.mereFormGroup.get('numeroMere')?.hasError('pattern')){
      this.errorNumeroMere = 'Le nummero de la mère n\'a pas le bon format!';
    }
      else
        this.errorNumeroMere = '';
  }

  private gestionErrorNomPere(){
    if(this.pereFormGroup.get('nomPere')?.hasError('required')){
      this.errorNomPere = 'Le nom du père doit être précisé!'
    }else
      this.errorNomPere = '';
  }


  private gestionErrorNumeroPere(){
    if(this.pereFormGroup.get('numeroPere')?.hasError('pattern')){
      this.errorNumeroPere = 'Le nummero du père n\'a pas le bon format!';
    }else 
      this.errorNumeroPere = '';
  }

  private gestionErrorNomTuteur(){
    if(this.tuteurFormGroup.get('nomTuteur')?.hasError('required')){
      this.errorNomTuteur = 'Le nom du tuteur doit être précisé!'
    }else 
      this.errorNomTuteur = '';
  }

  private gestionErrorNumeroTuteur(){
    if(this.tuteurFormGroup.get('numeroTuteur')?.hasError('pattern')){
      this.errorNumeroTuteur = 'Le nummero du tuteur n\'a pas le bon format!';
    }else
      this.errorNumeroTuteur = '';
  }


  getFormControlError(ctrl: AbstractControl) {
    if (ctrl.hasError('required'))
      return 'Ce champ est requis';
    else
      return false;
  }

}
