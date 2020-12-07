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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 100,
      },
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
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
};
