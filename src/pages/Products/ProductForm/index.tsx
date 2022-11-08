import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from '@utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField, Typography } from '@components';
import { schema } from './schema';
import { Product, RootState } from '@interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useProductModel } from '@models';
import { AxiosError } from 'axios';

export const ProductForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productModel = useProductModel();
  const productState = useSelector(productModel.selectProductState);
  const product = id && useSelector((state: RootState) => productModel.selectProduct(id, state));

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: product || { name: '', brand: '', price: 0, currency: 'USD' },
  });

  const submit = (data: Product) => {
    navigate('../');
  };

  const fillForm = async () => {
    if (product) return;

    try {
      await productModel.read(id);
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response.status === 404 && navigate('/404');
      }
    }
  };

  useEffect(() => {
    fillForm();
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
                render={({ field: { onChange, value } }) => (
                  <TextField fullWidth label="Name" onChange={onChange} value={value} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={'brand'}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField fullWidth label="Brand" onChange={onChange} value={value} />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name={'price'}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
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
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    disabled
                    label="Currency"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" disabled={!isValid}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};
