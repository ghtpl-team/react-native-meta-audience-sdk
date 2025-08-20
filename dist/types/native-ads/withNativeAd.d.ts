import { EventSubscription } from 'fbemitter';
import React, { ReactNode } from 'react';
import { AdIconViewContextValueType, ComponentOrClass, MediaViewContextValueType, TriggerableContextValueType } from './contexts';
import { HasNativeAd, NativeAd } from './nativeAd';
import AdsManager from './NativeAdsManager';
interface AdWrapperState {
    ad?: NativeAd;
    canRequestAds: boolean;
    mediaViewNodeHandle: number;
    adIconViewNodeHandle: number;
    clickableChildren: Set<number>;
}
interface AdWrapperProps {
    adsManager: AdsManager;
    onAdLoaded?: (ad: NativeAd) => void;
}
declare const _default: <T extends HasNativeAd>(Component: React.ComponentType<T>) => {
    new (props: AdWrapperProps & T): {
        subscription?: EventSubscription | undefined;
        subscriptionError?: EventSubscription | undefined;
        nativeAdViewRef?: React.Component<{}, {}, any> | undefined;
        registerFunctionsForTriggerables: TriggerableContextValueType;
        registerFunctionsForMediaView: MediaViewContextValueType;
        registerFunctionsForAdIconView: AdIconViewContextValueType;
        clickableChildrenNodeHandles: Map<ComponentOrClass, number>;
        /**
         * On init, register for updates on `adsManager` to know when it becomes available
         */
        componentDidMount(): void;
        componentDidUpdate(_: AdWrapperProps, prevState: AdWrapperState): void;
        /**
         * Clear subscription when component goes off screen
         */
        componentWillUnmount(): void;
        registerMediaView: (mediaView: ComponentOrClass) => void;
        unregisterMediaView: () => void;
        registerAdIconView: (adIconView: ComponentOrClass) => void;
        unregisterAdIconView: () => void;
        registerClickableChild: (child: ComponentOrClass) => void;
        unregisterClickableChild: (child: ComponentOrClass) => void;
        handleAdUpdated: () => void | undefined;
        handleAdLoaded: ({ nativeEvent }: {
            nativeEvent: NativeAd;
        }) => void;
        handleNativeAdViewMount: (ref: React.Component<{}, {}, any> | null) => void;
        renderAdComponent(componentProps: T): ReactNode;
        render(): React.JSX.Element | null;
        context: unknown;
        setState<K extends keyof AdWrapperState>(state: AdWrapperState | ((prevState: Readonly<AdWrapperState>, props: Readonly<AdWrapperProps & T>) => AdWrapperState | Pick<AdWrapperState, K> | null) | Pick<AdWrapperState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<AdWrapperProps & T>;
        state: Readonly<AdWrapperState>;
        shouldComponentUpdate?(nextProps: Readonly<AdWrapperProps & T>, nextState: Readonly<AdWrapperState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<AdWrapperProps & T>, prevState: Readonly<AdWrapperState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<AdWrapperProps & T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AdWrapperProps & T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<AdWrapperProps & T>, nextState: Readonly<AdWrapperState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<AdWrapperProps & T>, nextState: Readonly<AdWrapperState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
    propTypes?: any;
};
export default _default;
