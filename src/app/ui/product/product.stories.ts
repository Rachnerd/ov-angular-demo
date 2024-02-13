import type { Meta, StoryObj } from '@storybook/angular';
import { ProductComponent } from './product.component';

const meta: Meta<ProductComponent> = {
  title: 'UI/Product',
  component: ProductComponent,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ProductComponent>;

export const Primary: Story = {
  args: {
    title: 'External Hard Drive',
    price: 100,
    description: 'This is an External Hard Drive',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
};

export const Landscape: Story = {
  args: {
    title: 'SSD',
    price: 300,
    description: 'This is a SSD',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  },
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam arcu, venenatis quis feugiat at, aliquet nec justo. Mauris felis urna, facilisis id fermentum non, pretium in mauris. Praesent finibus, sapien in tempus finibus, quam enim venenatis tortor, et placerat justo mi a metus. Sed feugiat consectetur sapien, sit amet viverra felis. Nam aliquam ante vitae rhoncus vehicula. Nam vel euismod ligula, quis tempor sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum vestibulum arcu, eu convallis est condimentum at. Morbi lacinia ullamcorper enim, vel volutpat quam rhoncus vitae. Aliquam erat volutpat.';

export const Max: Story = {
  args: {
    title: lorem,
    price: 10000,
    description: lorem,
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  },
};
