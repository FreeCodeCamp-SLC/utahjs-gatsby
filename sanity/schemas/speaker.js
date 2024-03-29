import { MdPerson as icon } from 'react-icons/md';
import PresentationLengthInput from '../components/PresentationLengthInput';

export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'presentations',
      title: 'Presentations',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date_time',
      title: 'Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'number',
      description: 'Length of the presentation in minutes',
      validation: (Rule) => Rule.required(),
      inputComponent: PresentationLengthInput,
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'Date/Time',
      name: 'Date/Time',
      by: [{ field: 'date_time', direction: 'asc' }],
    },
  ],
};
