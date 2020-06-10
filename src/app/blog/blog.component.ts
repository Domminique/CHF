import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy, Inject } from '@angular/core';
import { SE } from '../directives/scroll.directive';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { DOCUMENT } from '@angular/common';

import * as $ from "jquery";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
	contactFabButton: any;
	bodyelement: any;
	sidenavelement: any;
  
	isActive = false;
	isActivefadeInDown = true;
	fixedTolbar = true;
  
	  mobileQuery: MediaQueryList;
  
	private _mobileQueryListener: () => void;
  
	constructor(@Inject(DOCUMENT) document, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
	  this.mobileQuery = media.matchMedia('(max-width: 600px)');
	  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
	  this.mobileQuery.addListener(this._mobileQueryListener);
	}
  
	ngOnInit() {

		jQuery(function($){

			let owl = $('.owl-carousel');

			owl.owlCarousel({
		   margin:10,
		   touchDrag:true,
		   responsive:{
			   0:{
				   items:1
			   },
			   600:{
				   items:3
			   },
			   1000:{
				   items:5
			   }
		   }
	   });

	   $('.customNextBtn').click(function() {
		   owl.trigger('next.owl.carousel');
	   });

	   $('.customPrevBtn').click(function() {
		   owl.trigger('prev.owl.carousel');
	   });

   });

	}
  
	public detectScroll(event: SE) {
	  
	  if (event.header) {
		this.isActive = false;
		this.isActivefadeInDown = true;
		this.fixedTolbar = true;
	  }
	  
	  if (event.bottom) {
		this.isActive = true;
		this.isActivefadeInDown  = false;
		this.fixedTolbar = false;
	  }
	  
	}
  
	openDialog(): void {
	  const dialogRef = this.dialog.open(ContactDialogComponent, {
		width: '250px'
	  });
	}
  
	setToggleOn(){
  
	  this.bodyelement = document.getElementById('nglpage');
	  this.bodyelement.classList.add("scrollOff");
	  this.contactFabButton = document.getElementById('contact-fab-button');
	  this.contactFabButton.style.display = "none";
	  
	}
  
	setToggleOff(){
	  
	  this.bodyelement = document.getElementById('nglpage');
	  this.bodyelement.classList.remove("scrollOff");
	  this.contactFabButton = document.getElementById('contact-fab-button');
	  this.contactFabButton.removeAttribute("style");
  
	}
  
  
	ngOnDestroy(): void {
	  this.mobileQuery.removeListener(this._mobileQueryListener);
	}
	
 	
  }



