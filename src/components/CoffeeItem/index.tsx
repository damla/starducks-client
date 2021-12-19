import { ReactElement } from 'react';
import { Item } from '../../interfaces';
// import cn from 'classnames';
import styles from './styles.module.scss';

// title: string;
// description: string;
// ingredients: string[];
// category: string;
// id: string;

interface Props {
  coffee: Item;
}

export default function CoffeeItem({ coffee }: Props): ReactElement {
  const { title, description, ingredients } = coffee;

  return (
    <div className={styles.Container}>
      <h2 className={styles.Header}>{title}</h2>
      <p className={styles.Description}>{description}</p>
      <div className={styles.Footer}>
        <span>Ingredients:&nbsp;</span>
        {ingredients.map((ingredient, i) => {
          return i === ingredients.length - 1 ? (
            <span key={`ingredient-${i}`}>{ingredient}</span>
          ) : (
            <span key={`ingredient-${i}`}>{ingredient},&nbsp;</span>
          );
        })}
      </div>
    </div>
  );
}
