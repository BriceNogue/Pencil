import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from 'src/app/models/artwork-model';
import { ArtworkService } from 'src/app/services/artwork.service';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})

export class ArtworkCardComponent implements OnInit {

  @Input() artwork: Artwork;
  artworks: Artwork[];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {
    this.artwork = new Artwork();
    const artwork = this.artworkService.getArtworks()
    .subscribe(artworks => this.artworks = artworks);
    console.log('Artwork ', artwork)
  }

}
