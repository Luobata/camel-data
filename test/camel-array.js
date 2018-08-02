/**
 * @desc camel-array unit test case
 */
const assert = require('assert');

let result;
const input = {
    list_id: [
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
    ],
};

it('array config never', () => {
    result = camel(input, { array: 'never' });

    assert.deepEqual(result, {
        listId: [
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
        ],
    });
});

it('array config always', () => {
    result = camel(input, { array: 'always' });

    assert.deepEqual(result, {
        listId: [
            'cityId',
            true,
            {
                userName: 'abc',
                projectId: 2,
                activityType: {
                    cityId: 3,
                    proviceId: ['pId'],
                    disIds: [
                        {
                            uName: 1,
                        },
                    ],
                },
            },
        ],
    });
});

it('array config object', () => {
    result = camel(input, { array: 'object' });

    assert.deepEqual(result, {
        listId: [
            'city_id',
            true,
            {
                userName: 'abc',
                projectId: 2,
                activityType: {
                    cityId: 3,
                    proviceId: ['p_id'],
                    disIds: [
                        {
                            uName: 1,
                        },
                    ],
                },
            },
        ],
    });
});
