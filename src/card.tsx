import React from 'react';

import cn from './utilities/classnames';

import Badge from './badge';
import Icon from './icon';
import Styles from './styles/card.module.scss';
import { color as ValidColor } from './types/color';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';

export interface CardProps {
  children?: React.ReactNode;
  centered?: boolean;
  thin?: boolean;
  inline?: boolean;
  title?: string;
  body?: string;
  className?: string;
  badge?:
    | {
        content: string;
        color: ValidColor;
      }
    | React.ReactElement<any>;
  icon?: IconType;
  iconSize?: IconSizeType;
  selected?: boolean;
}

export const Card: React.SFC<CardProps> = ({
  badge,
  body,
  centered,
  children,
  icon,
  iconSize,
  inline,
  thin,
  title,
  className,
  selected,
  ...attributes
}) => {
  return (
    <div
      className={cn(Styles.card, className, {
        [Styles['is-centered']]: centered,
        [Styles['is-inline']]: inline,
        [Styles['is-selected']]: selected,
        [Styles['is-thin']]: thin,
      })}
      {...attributes}
    >
      {badge && <Badge {...badge} />}
      {icon && (
        <div className={Styles['card-icon']}>
          <Icon size={iconSize} type={icon} />
        </div>
      )}
      {title && (
        <h2 className={cn({ [Styles['card-title']]: inline })}>{title}</h2>
      )}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
};

export default Card;
