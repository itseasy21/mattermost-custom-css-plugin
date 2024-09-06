// index.tsx
import {Store, Action} from 'redux';
import {GlobalState} from '@mattermost/types/lib/store';

import {PluginRegistry} from '@/types/mattermost-webapp';

// Import the custom CSS function
import CustomCSS from './custom_css';

export default class Plugin {
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        // Apply custom CSS by registering the component
        registry.registerRootComponent(CustomCSS);
    }
}

declare global {
    interface Window {
        registerPlugin(pluginId: string, plugin: Plugin): void;
    }
}

// Register the plugin
window.registerPlugin('com.mattermost.custom-css-plugin', new Plugin());
