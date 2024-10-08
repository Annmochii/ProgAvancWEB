import jwt from 'jsonwebtoken';

interface User{
    email: string;
    password: string;
}

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA0e0S59vWK4t9vKDD/ULnJwVb1QHP5Ouek+J4HUm21XPhA4Ni
KMGBPbTgt3sN50aKR0NnXjD61sqqDqtoFTfwW6kvF1ACbFLfHIoanBGDH4pkxOKg
ETC8+iUqtf89NroZWnG1L5bX4yJ7oQ0Mp6f38rVxVe/bRxlHax09QF5S20frbtqb
kLZe6euPMkOx/7ZnHqhEvxZfKCA3kITSAJ3c7tRvo9YQTh4Rwbx8/cRuc1FShTHZ
lFMEYwyRX5J8/VFOoKL2/NKNspRhXJ369QydbDVAA2iiY0+GIVMCvDfk13pw3+Vr
7OPeZvFVokbc4GGxGrJuk45zudiQ1PwYRjlAcwIDAQABAoIBAQCNAOSWAD+W+Bb4
wDNkxa9lsl/Ab3solGrrgk6TvZOlRDR7m6AvJ+qbfAcEtw7brbHrtAaWaefSpkYb
nF5JAk3cA4Ox8PfvsqpSDSFaexjL8rVE2cQSR95nVtedb1e6jr3A1meRE4zm756C
yrUZV+VfjSgXRQjQdNZXyEgAGFsnFasIT3jnMxU45RkVC74VzlV/0fPzAs96gKs7
bq/9f8dCyKC/os7LB1CfECuoPCPqTDu+jQZ9FdUYA+gNOQKTY8nIMNcUwlmIEAuZ
200gwkEYpa2CxR+6E23slNZOu1WAfbUnPy9OjdNhxfzjeSOmH2cxLpIpcxptqwxg
o5qEssThAoGBAP21jYZ+zOneRC2MU6l9w6ZJkKGUEctPR1qaTeVdflWCzgZ/eI8c
sgfjIgSMDDGXlZviAifpKm2orWQfIg3+I/+Dl3fvR3JOUsfadxN+AInjrjDIYToH
JJ/rqGDubJJZjscXX/HXJf/F4nn6IqOn/XrRwzmsRspMTJjqM0WN/48lAoGBANPS
UQ2WV+09vzymHnI/lDJW1BvSvsbOioeE8KEmgleadPp7ggMZ/BplJafHxH76fCY7
qk2DQxhPi9ECveXRSk9kiZrLnDD89o7R7J13v6Y7GFGwHYP0HvFISJC1beB2ObK7
0XuWPDfpX0KDd/L5Ddr0S+MLNmzfPlqeyYCsGSm3AoGBAIGQ/1bJWOKypQTR3kP3
uzwn45nw4Wl/8kO9+7wAFC2dYJQG80267NyETXIfB3coH7p9IHa7Z/SaqPoxwBV/
TWkHDgqtA0LH5xSzaA5nUeUZhnLZUnXtAfI9yj6+ZGoVHIpmUJRUOM63g2KhsKD9
gMEBcP76ESjs8E1Dha2mx/WVAoGBAKit+ifEyr49BrYoX2SBpuUzafPCLnQo8/4Z
anoaLX/Pm0oA4rbPkYf/di4XEi5AEG9t4h+Z4OtSJThLY6fIs9FncYEYlYgZWcq/
9xoqyy54LtSWV9rFo4JnGopKQHaYDzh7AsXVDJ1FtbtE8FdH57WuB2SFgFDQsln9
yt8xrVQfAoGAYlLOjUV9943OCV+PuLnC6LUgcmS+3HGJQTyTnDXb0enBid3R2uE2
XVmUNbgAIusZ31oeIeJ789u7vUpNQer1m/AbSyRjibpxkXaiMkeBoDHUiXDlsVYA
Z+8P3ZRLy3mA+890QXD2xJGe2gMuvgNNVA2qfogkVzbj10o4v4PQPEg=
-----END RSA PRIVATE KEY-----`

export async function generateJwToken(user: User) {
    const token = jwt.sign(JSON.stringify(user), privateKey, {algorithm: 'RS256'});
    return token;
}

export async function verifyToken(token: string){
    return null
}