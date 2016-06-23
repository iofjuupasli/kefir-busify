import Bus from 'kefir-bus';
import R from 'ramda';

const busify = actionNames => {
    if (R.is(String)(actionNames)) {
        return {
            [actionNames]: new Bus()
        };
    }
    if (R.isArrayLike(actionNames)) {
        return R.pipe(
            R.map(busify),
            R.mergeAll
        )(actionNames);
    }
    if (R.is(Object)(actionNames)) {
        return R.map(busify)(actionNames);
    }
};

export default busify;
