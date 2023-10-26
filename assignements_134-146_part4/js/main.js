"use strict";

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

let url1 = "http://www.packtpub.com/books/content/support";
let url2 = `https://nVXhLIltmnEUpGxCW9OFU7mHQP1QOH25n.56SL--7IR3JNANtaAGV3QizMW3OWLaFe7DRSXX5hhqgUBN6yuMGw-MMVobVLp.7jBQGYy/T%k2}3}BRm0UbYQmzGVS#~P4U/L0%IHj)l$1@)%c*ZODK ?C\ +4n06tYp%,O#WBI{U-+!>Z5K`
let url3 = `http://HyC9hfWAQEz8od14rnji3rbScTHnWX9.cbyteeRyGi_DbJNEA80C0Iv1cHPg8f_SPf3nVXu0PUX_EbcMzhV63Z28Rn5Nwz7OAV5avA6O2PBTCaibOLCrgTo0.5hULJXcqR04sl7Fw6BJkzhaRhkSLAa93EQhE7tESf_ur_81CKBe._AAIWy6PduKGQULckGsn__vStvI_dTWEX34ndph7Cdq_wGsFX8wYxXz5amftdbG9jE94erT5WbINZclBDnoA_Toh6J*JwXJXW,|;>Sxy[(S-[.UT+^}-6a}YE,:VPD^^&p2df8;:+G8G)zt?VsNls)J @DN I's@O<3%3Uy`;

let match1 = re.exec(url1);
let match2 = re.exec(url2);
let match3 = re.exec(url3);
console.log(match1[0]);
console.log(match2[0]);
console.log(match3[0]);
console.log(match1);
console.log(match2);
console.log(match3);

/*
explanation:
    https?:\/\/ - protocol - http or https followed by ://
    (?:[-\w]+\.)? - optional subdomain - at least one of the word characters or hyphens followed by a dot ?: makes it non-capturing won't be included in the results of re.exec(url1) or re.exec(url2) or re.exec(url3)
    ([-\w]+) - domain name - at least one of the word characters or hyphens
    \.\w+ - first level domain - a dot followed by at least one word character
    (?:\.\w+)? - optional second level domain - a dot followed by at least one word character ?: makes it non-capturing won't be included in the results of re.exec(url1) or re.exec(url2) or re.exec(url3)
    \/?.* - optional path - a slash followed by any number of any characters
    i - case insensitive
*/