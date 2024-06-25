import { Song } from "@shared/types";
import { lorem } from "./lorem";

import ArnuderCover from "@shared/assets/song-covers/arnudeCover.png";
import ArnudeSong from "@shared/assets/songs/Arnaud Le Texier - Step (Affin).mp3";

import BilliAlisCover from "@shared/assets/song-covers/last_cause.png";
import BilliAlishSong from "@shared/assets/songs/Billie Eilish - Lost Cause (Official Music Video).mp3";

import blackSabaCover from "@shared/assets/song-covers/blqack_saba.png";
import blackSabaSong from "@shared/assets/songs/Black Sabbath - Planet Caravan  2012 Remaster [4K Music Visualizer].mp3";

import niveckCover from "@shared/assets/song-covers/nivek.png";
import nivekSong from "@shared/assets/songs/NIVEK FFORHS - Missing Textures.mp3";

import tyleCover from "@shared/assets/song-covers/jagerr-03-46.png";
import tylerSong from "@shared/assets/songs/Tyler, The Creator - JUGGERNAUT (Official Video).mp3";

import UntCover from "@shared/assets/song-covers/gobCover.png";
import UntSong from "@shared/assets/songs/Unt. (Kadenz Remix).mp3";

export const songs: Song[] = [
  {
    songCover: ArnuderCover,
    songName: "Arnude La Texier",
    authorPhoto:
      "https://yt3.googleusercontent.com/lr692Wn8P1S-QSESceTrmpNpF5ytG8bL6yFo6yXEhBMxdAQFTEpyFjolLQnvjFbAn5AukoO62z4=s176-c-k-c0x00ffffff-no-rj",
    authorName: "Affin",
    duration: 371,
    songPath: ArnudeSong,
    description: lorem,
  },
  {
    songCover: BilliAlisCover,
    songName: "Last Cause",
    authorPhoto: "https://i.pinimg.com/564x/a3/b8/86/a3b886fc93b65a3efa3390fbbb4bab04.jpg",
    authorName: "Billi Eilish",
    duration: 228,
    songPath: BilliAlishSong,
    description: lorem,
  },
  {
    songCover: blackSabaCover,
    songName: "Planet Caravan",
    authorPhoto:
      "https://yt3.googleusercontent.com/qOlCZxfpUdaVR-1h2JhfzFXW9kZL6DhEX0QGPkOB0NgGC4DHk36pPhd8kAyKTnPXc_LZUf9zsQ=s176-c-k-c0x00ffffff-no-rj",
    authorName: "Black Sabbath",
    duration: 280,
    songPath: blackSabaSong,
    description: lorem,
  },
  {
    songCover: niveckCover,
    songName: "Missing Textures",
    authorPhoto:
      "https://yt3.googleusercontent.com/EnIhV7Ugxd2utAbDfgrQtMWmV6uyK2j4UJ__OaESjHbIUkArPSTdAeVP0_OyXQkHRu3-_zQ3=s176-c-k-c0x00ffffff-no-rj",
    authorName: "NIVEK FFORHS",
    duration: 168,
    songPath: nivekSong,
    description: lorem,
  },
  {
    songCover: tyleCover,
    songName: "JUGGERNAUT",
    authorPhoto:
      "https://yt3.googleusercontent.com/rIEDV4fQKzMLE3wgIzHcqabX5rc418TqabPyU3yuJEJhAsprl-3ui7fly__WgOpts0BboHpXZPc=s176-c-k-c0x00ffffff-no-rj",
    authorName: "Tyler The Creator",
    duration: 96,
    songPath: tylerSong,
    description: lorem,
  },
  {
    songCover: UntCover,
    songName: "Unt.",
    authorPhoto:
      "https://yt3.googleusercontent.com/GAAbcvwmbCkicMJTs3k_2Ra12x-yqiL6gje77v3N_SH-vcZksrhG5kyDSFpjLufkn92h6OMHV6g=s176-c-k-c0x00ffffff-no-rj",
    authorName: "Agent Boggie",
    duration: 461,
    songPath: UntSong,
    description: lorem,
  },
];
