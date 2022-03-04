import axios from 'axios-https-proxy-fix'
import {Hosts, hostsUrl, TargetData} from './types'

export const getSitesData = async () => {
  const { data: hosts } = await axios.get<Hosts>(hostsUrl);
  // const hosts = await axios.get<Hosts>(hostsUrl);

  const { data: target } = await axios.get<TargetData>(hosts[Math.floor(Math.random() * hosts.length)], { timeout: 10000 })
  // const target = await axios.get<TargetData>(hosts[Math.floor(Math.random() * hosts.length)], { timeout: 10000 })

  return [target.proxy, target.site];
}
