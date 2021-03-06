import { ContainerColor, ContainerMaterial, ContainerType, ContainerUnit } from '@/utils/enums/beverage';

export type Container = {
  color: ContainerColor;
  material: ContainerMaterial;
  unit: ContainerUnit;
  type: ContainerType;
  value: number;
  hasCork?: boolean;
  hasCapWireFlip?: boolean;
};
