import Highway from '@dogstudio/highway';
// getting the specific 'TimeLineLite' function from gsap.js document I downloaded thanks to node and gsap package
import { TimelineLite } from 'gsap/dist/gsap';

//Fade animation 
class Fade extends Highway.Transition {
    in({ from, to, done }) {
        const t1 = new TimelineLite();
        t1.fromTo(to, 0.5, { left: '-100%', top: '50%' }, { left: '0%' }).fromTo(
            to,
            0.5,
            { height: '2vh' },
            {
                height: '90vh', top: '10%', onComplete: function () {
                    //remove the container so they don't stack
                    from.remove();
                    done();
                }
            }
        );
    }
    out({ from, done }) {
        done();
    }
}

export default Fade;