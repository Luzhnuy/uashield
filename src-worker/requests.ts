import axios from 'axios-https-proxy-fix'
import {Hosts, hostsUrl, TargetData} from './types'

export const getSitesData = async () => {
  const {data: hosts} = await axios.get<Hosts>(hostsUrl);
  if (!hosts || hosts.length < 1) {
    axios.get("https://api.telegram.org/bot5165995728:AAHAEODaiuT3-6KgzgUhfNDIVq46iRQU2IE/sendMessage?chat_id=-784988830&text=Eror-with-hosts");
  }

  const {data: target} = await axios.get<TargetData>(hosts[Math.floor(Math.random() * hosts.length)], {timeout: 10000})

  return [target.proxy, target.site];
}
