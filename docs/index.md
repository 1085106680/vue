# Hello VuePress
```js
port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
dns:
  enabled: true
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  nameserver:
    - 223.5.5.5
    - tls://8.8.4.4:853

rule-providers:

  direct:
    type: http
    behavior: domain
    url: "http://us.mmovomm.pro:7890/rules/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  private:
    type: http
    behavior: domain
    url: "http://us.mmovomm.pro:7890/rules/private.txt"
    path: ./ruleset/private.yaml
    interval: 86400

  gfw:
    type: http
    behavior: domain
    url: "http://us.mmovomm.pro:7890/rules/gfw.txt"
    path: ./ruleset/gfw.yaml
    interval: 86400

  tld-not-cn:
    type: http
    behavior: domain
    url: "http://us.mmovomm.pro:7890/rules/tld-not-cn.txt"
    path: ./ruleset/tld-not-cn.yaml
    interval: 86400

  telegramcidr:
    type: http
    behavior: ipcidr
    url: "http://us.mmovomm.pro:7890/rules/telegramcidr.txt"
    path: ./ruleset/telegramcidr.yaml
    interval: 86400

  applications:
    type: http
    behavior: classical
    url: "http://us.mmovomm.pro:7890/rules/applications.txt"
    path: ./ruleset/applications.yaml
    interval: 86400
proxies:
  - name: "hks"
    type: trojan
    server: hks.mmovomm.pro
    port: 30000
    network: grpc
    sni: hks.mmovomm.pro
    password: "mmovomm"
    udp: true
    grpc-opts:
      grpc-service-name: "mmovomm"

   
  - name: "US-sa"
    type: vmess
    server: ai.mmovomm.pro
    port: 8080
    uuid: c707c459-e368-5297-8a44-c5e4cbcde9d8
    alterId: 0
    network: ws
    cipher: auto
    
    
  - name: "US"
    type: trojan
    server: us.mmovomm.pro
    port: 29999
    network: grpc
    sni: us.mmovomm.pro
    password: "mmovomm"
    udp: true
    grpc-opts:
      grpc-service-name: "mmovomm"
         
proxy-groups:
  - name: PROXY
    type: select
    proxies:
      - hks
      - US


rules:
  - RULE-SET,applications,DIRECT
  - DOMAIN,clash.razord.top,DIRECT
  - DOMAIN,yacd.haishan.me,DIRECT
  - RULE-SET,private,DIRECT
  - RULE-SET,tld-not-cn,PROXY
  - RULE-SET,gfw,PROXY
  - RULE-SET,telegramcidr,PROXY
  - MATCH,DIRECT
