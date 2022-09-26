import json


async def test_get_example(jp_fetch):
    # When
    response = await jp_fetch("jlab-ext-example2", "get_example")

    # Then
    assert response.code == 200
    payload = json.loads(response.body)
    assert payload == {
        "data": "This is /jlab-ext-example2/get_example endpoint!"
    }