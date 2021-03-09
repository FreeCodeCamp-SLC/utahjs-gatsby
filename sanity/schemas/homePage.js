import { MdHome as icon } from 'react-icons/md';

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hero Header',
      name: 'heroHeader',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hero SubText-1',
      name: 'heroSubtext1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hero SubText-2',
      name: 'heroSubtext2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'HeroBgImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Other Meetup Header',
      name: 'otherMeetupHeader',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Angular Anchor Text',
      name: 'angularAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Angular Url',
      name: 'angularUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'angularImage',
      title: 'Angular Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Lunch Anchor Text',
      name: 'lunchAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Lunch Url',
      name: 'lunchUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lunchImage',
      title: 'Lunch Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Node Anchor Text',
      name: 'nodeAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Node Url',
      name: 'nodeUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nodeImage',
      title: 'Node Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'React Anchor Text',
      name: 'reactAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'React Url',
      name: 'reactUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reactImage',
      title: 'React Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Ember Anchor Text',
      name: 'emberAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Ember Url',
      name: 'emberUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emberImage',
      title: 'Ember Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Ionic Anchor Text',
      name: 'ionicAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Ionic Url',
      name: 'ionicUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ionicImage',
      title: 'Ionic Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Vue Anchor Text',
      name: 'vueAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Vue Url',
      name: 'vueUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'vueImage',
      title: 'Vue Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Downtown Coding Anchor Text',
      name: 'downtownCodingAnchorText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Downtown Coding Url',
      name: 'downtownCodingUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'downtownCodingImage',
      title: 'Downtown Coding Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Footer',
      name: 'footer',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
