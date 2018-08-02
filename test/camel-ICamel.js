/* eslint-disable */
const assert = require('assert');
let result;
let input;

it('basic usage', function() {
    // ICamel
    input = {
        user_name: 'abc',
        project_id: 2,
        'activity-type': {
            city_id: 3,
        },
    };
    result = camel(input);
    assert.deepEqual(result, {
        userName: 'abc',
        projectId: 2,
        activityType: {
            cityId: 3,
        },
    });

    // assure the inpu data won't be changed
    assert.deepEqual(input, {
        user_name: 'abc',
        project_id: 2,
        'activity-type': {
            city_id: 3,
        },
    });

    // (ICamel | string)[]
    input = [
        'city_id',
        true,
        {
            user_name: 'abc',
            project_id: 2,
            'activity-type': {
                city_id: 3,
                provice_id: ['p_id'],
                dis_ids: [
                    {
                        u_name: 1,
                    },
                ],
            },
        },
    ];

    result = camel(input);
    assert.deepEqual(result, [
        'cityId',
        true,
        {
            userName: 'abc',
            projectId: 2,
            activityType: {
                cityId: 3,
                proviceId: ['p_id'],
                disIds: [
                    {
                        u_name: 1,
                    },
                ],
            },
        },
    ]);
});
