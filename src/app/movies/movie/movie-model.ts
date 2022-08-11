import { Time } from "@angular/common";
import { DeclarationListEmitMode } from "@angular/compiler";

export interface IMovies{
    movieId: number;
    castId: number;
    title: string;
    description: string;
    duration: Time;
    language: string;
    releaseDate: Date;
    genre: string;
    image1: string;
    image2: string;
    trailer: string;
}