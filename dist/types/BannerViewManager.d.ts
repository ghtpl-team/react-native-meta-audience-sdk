import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type AdType = 'large' | 'standard';
interface BannerViewProps {
    type: AdType;
    placementId: string;
    onPress: Function;
    onError: Function;
    onLoad: Function;
    style: StyleProp<ViewStyle>;
}
declare const BannerView: (props: BannerViewProps) => React.JSX.Element;
export default BannerView;
