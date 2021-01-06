import S from '@sanity/desk-tool/structure-builder';
import { IoMdDocument as icon } from 'react-icons/io';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(icon)
        .child(
          S.editor()
            .title('Home Page Editor')
            .id('home')
            .schemaType('home')
            .documentId('singleton-home')
        ),
      S.listItem()
        .title('Conference Page')
        .icon(icon)
        .child(
          S.editor()
            .title('Conference Page Editor')
            .id('conferencePage')
            .schemaType('conferencePage')
            .documentId('singleton-conference')
        ),
      S.listItem()
        .title('Sponsor Us Page')
        .icon(icon)
        .child(
          S.editor()
            .title('Sponsor Us Page Editor')
            .id('sponsorUs')
            .schemaType('sponsorUs')
            .documentId('singleton-sponsor-us')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['home', 'conferencePage', 'sponsorUs'].includes(listItem.getId())
      ),
    ]);
