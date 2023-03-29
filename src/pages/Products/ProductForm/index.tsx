import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from '@utils';
import { Button, Grid, TextField, Typography } from '@components';
import { schema } from './schema';
import { Product, RootState } from '@interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useProductModel } from '@models';

export const ProductForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productModel = useProductModel();
  const productState = useSelector(productModel.selectProductState);
  const product = useSelector((state: RootState) => productModel.selectProduct(id, state));

  const {
    control,
    fill,
    handleSubmit,
    formState: { isValid },
  } = useForm(schema);

  const submit = async (data: Product) => {
    await productModel.update(id, data);
    navigate('../');
  };

  useEffect(() => {
    fill(product);
  }, [product]);

  useEffect(() => {
    product === undefined && productModel.read(id);
  }, []);

  return (
    <>
      {productState.reading ? (
        <Typography>Loading...</Typography>
      ) : (
        <form onSubmit={handleSubmit(submit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name={'name'}
                control={control}
                render={({ field: { onChange, name, value } }) => (
                  <TextField fullWidth name={name} label="Name" onChange={onChange} value={value} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={'brand'}
                control={control}
                render={({ field: { onChange, name, value } }) => (
                  <TextField
                    fullWidth
                    name={name}
                    label="Brand"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={'price'}
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextField
                    fullWidth
                    name={name}
                    label="Price"
                    type="number"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={'currency'}
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <TextField
                    fullWidth
                    name={name}
                    disabled
                    label="Currency"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || productState.updating}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};
