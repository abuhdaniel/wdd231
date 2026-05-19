async function getMembers() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch member data");
        }

        const data = await response.json();

        displayMembers(data.members);

    } catch (error) {

        console.error(error);

    }
}