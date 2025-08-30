import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { useColors } from '../../utils/color';
export interface ILoaderProps {
    size?: number;
    color?: string;
}
export default function Loader(props: ILoaderProps) {
    const colors = useColors();
    return (
        <ActivityIndicator color={props.color || colors.loader} size={props.size || 20} />
    );
}