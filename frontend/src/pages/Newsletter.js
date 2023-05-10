import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';
import {async} from "q";
import {func} from "prop-types";

function NewsletterPage() {
    return (
        <PageContent>
            <NewsletterSignup/>
        </PageContent>
    )
}

export default NewsletterPage;

export async function action({request}) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return {message: 'Signup successful!'};
}