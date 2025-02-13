import { ConstantsUtil } from './ConstantsUtil.js';
export const CoreHelperUtil = {
    isMobile() {
        if (typeof window !== 'undefined') {
            return Boolean(window.matchMedia('(pointer:coarse)').matches ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
        }
        return false;
    },
    isAndroid() {
        const ua = navigator.userAgent.toLowerCase();
        return CoreHelperUtil.isMobile() && ua.includes('android');
    },
    isIos() {
        const ua = navigator.userAgent.toLowerCase();
        return CoreHelperUtil.isMobile() && (ua.includes('iphone') || ua.includes('ipad'));
    },
    isClient() {
        return typeof window !== 'undefined';
    },
    isPairingExpired(expiry) {
        return expiry ? expiry - Date.now() <= ConstantsUtil.TEN_SEC_MS : true;
    },
    isAllowedRetry(lastRetry) {
        return Date.now() - lastRetry >= ConstantsUtil.ONE_SEC_MS;
    },
    copyToClopboard(text) {
        navigator.clipboard.writeText(text);
    },
    getPairingExpiry() {
        return Date.now() + ConstantsUtil.FOUR_MINUTES_MS;
    },
    getPlainAddress(caipAddress) {
        return caipAddress.split(':')[2];
    },
    async wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    },
    debounce(func, timeout = 500) {
        let timer = undefined;
        return (...args) => {
            function next() {
                func(...args);
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(next, timeout);
        };
    },
    isHttpUrl(url) {
        return url.startsWith('http://') || url.startsWith('https://');
    },
    formatNativeUrl(appUrl, wcUri) {
        if (CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatUniversalUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.includes('://')) {
            safeAppUrl = appUrl.replaceAll('/', '').replaceAll(':', '');
            safeAppUrl = `${safeAppUrl}://`;
        }
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    formatUniversalUrl(appUrl, wcUri) {
        if (!CoreHelperUtil.isHttpUrl(appUrl)) {
            return this.formatNativeUrl(appUrl, wcUri);
        }
        let safeAppUrl = appUrl;
        if (!safeAppUrl.endsWith('/')) {
            safeAppUrl = `${safeAppUrl}/`;
        }
        const encodedWcUrl = encodeURIComponent(wcUri);
        return {
            redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
            href: safeAppUrl
        };
    },
    openHref(href, target) {
        window.open(href, target, 'noreferrer noopener');
    },
    async preloadImage(src) {
        const imagePromise = new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.crossOrigin = 'anonymous';
            image.src = src;
        });
        return Promise.race([imagePromise, CoreHelperUtil.wait(2000)]);
    },
    formatBalance(balance, symbol) {
        let formattedBalance = undefined;
        if (balance === '0') {
            formattedBalance = '0.000';
        }
        else if (typeof balance === 'string') {
            const number = Number(balance);
            if (number) {
                formattedBalance = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0];
            }
        }
        return formattedBalance ? `${formattedBalance} ${symbol}` : '0.000';
    },
    isRestrictedRegion() {
        try {
            const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();
            const capTimeZone = timeZone.toUpperCase();
            return ConstantsUtil.RESTRICTED_TIMEZONES.includes(capTimeZone);
        }
        catch {
            return false;
        }
    },
    getApiUrl() {
        return CoreHelperUtil.isRestrictedRegion()
            ? 'https://api.web3modal.org'
            : 'https://api.web3modal.com';
    },
    getBlockchainApiUrl() {
        return CoreHelperUtil.isRestrictedRegion()
            ? 'https://rpc.walletconnect.org'
            : 'https://rpc.walletconnect.com';
    },
    getAnalyticsUrl() {
        return CoreHelperUtil.isRestrictedRegion()
            ? 'https://pulse.walletconnect.org'
            : 'https://pulse.walletconnect.com';
    },
    getUUID() {
        if (crypto?.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/gu, c => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
};
//# sourceMappingURL=CoreHelperUtil.js.map