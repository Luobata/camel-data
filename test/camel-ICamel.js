/* eslint-disable */
const assert = require('assert');
let result;
let input;

it('basic usage', function() {
    // ICamel
    input = {
        data: {
            user_key: 1,
        },
        user_name: 'abc',
        project_id: 2,
        'activity-type': {
            city_id: 3,
        },
    };
    result = camel(input);
    assert.deepEqual(result, {
        data: {
            userKey: 1,
        },
        userName: 'abc',
        projectId: 2,
        activityType: {
            cityId: 3,
        },
    });

    // assure the inpu data won't be changed
    assert.deepEqual(input, {
        data: {
            user_key: 1,
        },
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

it('ignore the key if its camel string exist', function() {
    input = {
        user_name: 'abc',
        userName: '123',
        project_id: 2,
        'activity-type': {
            city_id: 3,
        },
    };
    result = camel(input);
    assert.deepEqual(result, {
        user_name: 'abc',
        userName: '123',
        projectId: 2,
        activityType: {
            cityId: 3,
        },
    });

    input = {
        userName: '123',
        user_name: 'abc',
        project_id: 2,
        'activity-type': {
            city_id: 3,
        },
    };
    result = camel(input);
    assert.deepEqual(result, {
        user_name: 'abc',
        userName: '123',
        projectId: 2,
        activityType: {
            cityId: 3,
        },
    });
});
