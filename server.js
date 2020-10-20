
function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    })
}

async function main(){
    while(true){
        console.log('Microservices rock!');

        await sleep(process.env.TIMEOUT);
    }
}

main();