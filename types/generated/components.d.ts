import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderItemOrderItem extends Schema.Component {
  collectionName: 'components_order_item_order_items';
  info: {
    displayName: 'OrderItem';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer;
    amount: Attribute.Integer;
    product: Attribute.Relation<
      'order-item.order-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-item.order-item': OrderItemOrderItem;
    }
  }
}
