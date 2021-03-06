import pdf1 from '../../static/files/meeting-minutes/1. IEEE Executive Meeting Agenda (June 16).pdf';
import pdf2 from '../../static/files/meeting-minutes/1.1 IEEE Executive Meeting Minutes.pdf';
import pdf3 from '../../static/files/meeting-minutes/2. IEEE Executive Meeting  Agenda (July 15).pdf';
import pdf4 from '../../static/files/meeting-minutes/2.1 IEEE Executive Meeting Minutes.pdf';
import pdf5 from '../../static/files/meeting-minutes/3. IEEE Executive Meeting Agenda (August 21).pdf';
import pdf6 from '../../static/files/meeting-minutes/3.1 IEEE Executive Meeting Minutes .pdf';
import pdf7 from '../../static/files/meeting-minutes/4. IEEE Executive Meeting Agenda (Sept 16th).pdf';
import pdf8 from '../../static/files/meeting-minutes/5. IEEE Executive Meeting Agenda (Sept22nd).pdf';
import pdf9 from '../../static/files/meeting-minutes/6. IEEE Meeting  Agenda (Oct 2nd).pdf';
import pdf10 from '../../static/files/meeting-minutes/7. IEEE Meeting Agenda (October 2nd).pdf';
import pdf11 from '../../static/files/meeting-minutes/8. IEEE Meeting Agenda (October 21st).pdf';
import pdf12 from '../../static/files/meeting-minutes/9. IEEE Meeting Agenda (November 4th) .pdf';
import pdfAGM from '../../static/files/meeting-minutes/IEEE AGM Meeting Agenda (Sept 23rd).pdf';

const pdfMap = {
    '1. IEEE Executive Meeting Agenda (June 16).pdf': pdf1,
    '1.1 IEEE Executive Meeting Minutes.pdf': pdf2,
    '2. IEEE Executive Meeting  Agenda (July 15).pdf': pdf3,
    '2.1 IEEE Executive Meeting Minutes.pdf': pdf4,
    '3. IEEE Executive Meeting Agenda (August 21).pdf': pdf5,
    '3.1 IEEE Executive Meeting Minutes .pdf': pdf6,
    '4. IEEE Executive Meeting Agenda (Sept 16th).pdf': pdf7,
    '5. IEEE Executive Meeting Agenda (Sept22nd).pdf': pdf8,
    'IEEE AGM Meeting Agenda (Sept 23rd).pdf': pdfAGM,
    '6. IEEE Meeting  Agenda (Oct 2nd).pdf': pdf9,
    '7. IEEE Meeting Agenda (October 2nd).pdf': pdf10,
    '8. IEEE Meeting Agenda (October 21st).pdf': pdf11,
    '9. IEEE Meeting Agenda (November 4th) .pdf': pdf12
};

const pdfs = Object.keys(pdfMap);

export { pdfs, pdfMap };
