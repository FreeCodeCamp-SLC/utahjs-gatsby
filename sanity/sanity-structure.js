import S from '@sanity/desk-tool/structure-builder';
import { IoMdDocument as icon } from 'react-icons/io';

const hiddenDocTypes = (listItem) =>
  !['conferencePage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
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
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
