//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const RatingTitle = () => {
  const record = useRecordContext();
  return <span>Rating {record ? `"${record.finalRating}"` : ''}</span>;
};

export const RatingList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="finalRating" />
      <DateField source="ratingDate" />
      <ReferenceField source="userID" reference="User" />
      <ReferenceField source="animeID" reference="Anime" />
      <TextField source="reviewText" />
      <NumberField source="likesDislikes" />
      <BooleanField source="spoilerWarning" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const RatingEdit = () => (
  <Edit title={<RatingTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="finalRating" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="ratingDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="userID" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="animeID" reference="Anime" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="reviewText" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="likesDislikes" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="spoilerWarning" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const RatingCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="finalRating" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="ratingDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="userID" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="animeID" reference="Anime" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="reviewText" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="likesDislikes" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="spoilerWarning" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  <ReferenceInput source="userID" label="userID" reference="User" alwaysOn />,
  <ReferenceInput
    source="animeID"
    label="animeID"
    reference="Anime"
    alwaysOn
  />,
  ,
  ,
  ,
];
