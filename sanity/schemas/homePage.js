import { MdHome as icon } from 'react-icons/md';

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
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
      title: 'Content Header',
      name: 'contentHeader',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Conferences Text',
      name: 'conferencesText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },

    {
      title: 'Slack Text',
      name: 'slackText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },

    {
      title: 'Slack Button Url',
      name: 'slackUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Merch Text',
      name: 'merchText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Merch Button Url',
      name: 'merchUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Email Text',
      name: 'emailText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Email Button Url',
      name: 'emailUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Lehi Text',
      name: 'lehiText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Lehi Button Url',
      name: 'lehiUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'SLC Text',
      name: 'SLCText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'SLC Button Url',
      name: 'SLCUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Ogden Text',
      name: 'ogdenText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Ogden Button Url',
      name: 'ogdenUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Learners Text',
      name: 'learnersText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Learners Button Url',
      name: 'learnersUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'LinkedIn Text',
      name: 'linkedIn',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'LinkedIn Button Url',
      name: 'linkedInUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Twitter Text',
      name: 'twitterText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Twitter Button Url',
      name: 'twitterUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Videos Text',
      name: 'videosText',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Videos Button Url',
      name: 'videosUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
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
