import camel from '../src';

window.onload = () => {
    let a = camel('user_name');
    let input = {
        user_name: 'abc',
        project_id: 2,
        'activity-type': {
            city_id: 3,
        },
    };

    // a = camel(input);

    // console.log(a);
    // console.log(input);

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
    a = camel(input);

    // console.log(a);
    input = {
        list_id: [
            'city_id',
            true,
            {
                user_name: 'abc',
                project_id: 2,
                'activity-type': {
                    city_id: 3,
                    provice_id: ['p_id'],
                    city_name: 'bei_jing',
                    dis_ids: [
                        {
                            u_name: 1,
                            city_name: 'jing_dong',
                        },
                    ],
                },
            },
        ],
    };
    // console.log(camel(input, { array: 'always' }));
    console.log(camel(input, { array: 'object' }));
};
