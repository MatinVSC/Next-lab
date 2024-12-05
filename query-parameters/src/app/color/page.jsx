'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ColorBrandSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const colors = ['red', 'green', 'yellow', 'black', 'orange'];
  const brands = ['bmw', 'benz', 'porsche', 'megan', 'maserati'];

  const [params, setParams] = useState(new URLSearchParams(searchParams.toString()));

  useEffect(() => {
    setParams(new URLSearchParams(searchParams.toString()));
  }, [searchParams]);

  const updateQueryParams = (key, value) => {
    const newParams = new URLSearchParams(params);

    if (newParams.has(key)) {
      const values = newParams.getAll(key);
      if (values.includes(value)) {
        newParams.delete(key);
        values.filter(v => v !== value).forEach(v => newParams.append(key, v));
      } else {
        newParams.append(key, value);
      }
    } else {
      newParams.append(key, value);
    }

    router.replace(`?${newParams.toString()}`);
  };

  const isActive = (key, value) => 
    params.getAll(key).includes(value);

  return (
    <div className="container">
      <h1>Color and Brand Selector</h1>
      <div>
        <h2>Colors</h2>
        <div className="button-group">
          {colors.map((color) => (
            <button
              key={color}
              className={`button ${isActive('color', color) ? 'button-active' : ''}`}
              onClick={() => updateQueryParams('color', color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2>Brands</h2>
        <div className="button-group">
          {brands.map((brand) => (
            <button
              key={brand}
              className={`button ${isActive('brand', brand) ? 'button-active' : ''}`}
              onClick={() => updateQueryParams('brand', brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
