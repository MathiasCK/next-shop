import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import commerce from "../../utils/commerce";
import Button from "../button/button";
import {
  Inputs,
  Selects,
  Actions,
} from "../../styles/checkout/checkout-styles";

import Link from "next/link";
const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm();
  const { register } = methods;
  const cart = useCart();

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  const [shippingSubdivsions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivsion, setShippingSubdivision] = useState("");

  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivsions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((s_Option) => ({
    id: s_Option.id,
    label: `${s_Option.description} - (${s_Option.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    // [ NO, SE, DE ] ...
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubDivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);

    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivsion)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivsion
      );
  }, [shippingSubdivsion]);

  return (
    <div>
      <div>Adress form</div>
      <form
        onSubmit={methods.handleSubmit((data) =>
          next({
            ...data,
            shippingCountry,
            shippingSubdivsion,
            shippingOption,
          })
        )}
      >
        <Inputs>
          <input
            placeholder="Your firstname *"
            required
            {...register("firstName")}
            label="First name"
          />
          <input
            placeholder="Your lastname *"
            required
            {...register("lastName")}
            label="Last name"
          />
          <input
            placeholder="Your adress *"
            required
            {...register("address1")}
            label="Address"
          />
          <input
            placeholder="Your email adress *"
            required
            {...register("email")}
            label="Email"
          />
          <input
            placeholder="City *"
            required
            {...register("city")}
            label="City"
          />
          <input
            placeholder="ZIP *"
            required
            {...register("zip")}
            label="ZIP / Postal Code"
          />
        </Inputs>
        <Selects>
          <div className="controls">
            <label>Shipping Country</label>
            <select
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          <div className="controls">
            <label>Shipping Subdivision</label>
            <select
              value={shippingSubdivsion}
              onChange={(e) => setShippingSubdivision(e.target.value)}
            >
              {subdivisions.map((subdivision) => (
                <option key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </option>
              ))}
            </select>
          </div>
          <div className="controls">
            <label>Shipping Option</label>
            <select
              value={shippingOption}
              onChange={(e) => {
                setShippingOption(e.target.value);
              }}
            >
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </Selects>
        <Actions>
          <p>Your total is: {cart.subtotal.formatted_with_symbol}</p>
          <Link href="/cart">
            <div>
              <Button>Back To Cart</Button>
            </div>
          </Link>
          <Button type="submit">Next</Button>
        </Actions>
      </form>
    </div>
  );
};

export default AddressForm;
