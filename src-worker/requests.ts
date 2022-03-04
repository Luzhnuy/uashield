import axios from 'axios-https-proxy-fix'
import {SiteData, ProxyData, Hosts, hostsUrl, TargetData} from './types'

export const getHosts = () => axios.get<Hosts[]>(hostsUrl)
const hosts = getHosts();
const target = axios.get<TargetData>(hosts[Math.floor(Math.random() * hosts.length)], { timeout: 10000 })
export const getSites = () => target.site
export const getProxies = () => target.proxy
