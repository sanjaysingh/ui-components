// @flow
import React from 'react';
import cx from 'classnames';
import { StandardLoader } from './Loader';

type ButtonType = 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  children?: string,
  disabled?: boolean,
  loading?: boolean,
  badge?: ?number | StandardLoader,
  small?: boolean,
  onDark?: boolean,
  type: ButtonType,
  onClick: Function,
  group?: boolean,
  active?: boolean,
};

const Button = ({
  children,
  type,
  badge,
  disabled,
  loading,
  small,
  onDark,
  onClick,
  group,
  active,
}: ButtonProps) => {
  const hasBadge: boolean = !!badge || badge === 0;
  return (
    <button
      className={cx('btn', `btn-${type}`, {
        'is-disabled': disabled,
        'is-loading': loading,
        'has-badge': hasBadge,
        'btn-small': small,
        'btn-on-dark': onDark,
        'btn-group-item': group,
        'is-active': active,
      })}
      onClick={onClick}
    >
      {hasBadge && <span className="badge">{badge}</span>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button Text',
  disabled: false,
  loading: false,
  small: false,
  onDark: false,
  badge: null,
  group: false,
  active: false,
};

export default Button;
