import './styles/style.scss';
import { ExportedFn, ExportedArrowFn, ExportedConst, ExportedFnReturnsValue } from './sample-imported-file'

console.log('hello, world');

const testMessage: string = 'TypeScript works';

console.log(testMessage);

// importing values from another file
console.log('-'.repeat(20))
ExportedFn()
ExportedArrowFn()
console.log(ExportedFnReturnsValue())
console.log(ExportedConst)
console.log('-'.repeat(20))
