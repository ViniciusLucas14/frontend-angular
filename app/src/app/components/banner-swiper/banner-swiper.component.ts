import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-banner-swiper',
  templateUrl: './banner-swiper.component.html',
  styleUrls: ['./banner-swiper.component.scss']
})
export class BannerSwiperComponent implements OnInit {
  @ViewChild("swiper") swiper!: SwiperComponent;

  constructor() { }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  ngOnInit(): void {
  }

}
