export interface IuserProfile {
  _id: string;
  name: string;
  Major: string;
  description: string;
  About: {
    bio: string;
    skills: {
      title: string;
      description: string;
      _id: string;
    }[];
    MyPhilosophy: string;
    WhatIDo: string;
  };
  Education: {
    title: string;
    description: string;
    _id: string;
  }[];
  project: {
    title: string;
    description: string;
    _id: string;
  }[];
  contact: {
    platform: string;
    url: string;
    _id: string;
  }[];
}

