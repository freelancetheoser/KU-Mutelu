<?php

namespace Database\Seeders;

use App\Models\Landmark;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Post::factory(20)->create();

        Post::factory(1)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'ขจัดทุกข์ภัย',
            'content' => 'ขอพระองค์ทรงนำทางชีวิต ขจัดทุกข์ภัยให้คลาย',
            'image_post' => './images/landmark/seedPost/1.webp',
            'likes_count' => 80
        ]);

        Post::factory(2)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'สุขภาพแข็งแรง',
            'content' => 'ปัญญาเฉียบแหลม สุขภาพแข็งแรง สมองดี',
            'image_post' => './images/landmark/seedPost/2.webp',
            'likes_count' => 80
        ]);

        Post::factory(3)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'รักมั่นคง',
            'content' => 'ครอบครัวปลอดภัย รักมั่นคง เงินทองไหลมา',
            'image_post' => './images/landmark/seedPost/3.webp',
            'likes_count' => 80
        ]);

        Post::factory(4)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'สมปรารถนา',
            'content' => 'คิดสิ่งใด สมปรารถนา อุปสรรคคลี่คลาย',
            'image_post' => './images/landmark/seedPost/4.webp',
            'likes_count' => 80
        ]);

        Post::factory(5)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'มิตรสหาย',
            'content' => 'ศัตรูพ่ายแพ้ มิตรสหาย คอยช่วยเหลือ',
            'image_post' => './images/landmark/seedPost/5.webp',
            'likes_count' => 80
        ]);

        Post::factory(6)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'กิจการ',
            'content' => 'กิจการเจริญรุ่งเรือง มั่งคั่ง มั่งมี',
            'image_post' => './images/landmark/seedPost/6.webp',
            'likes_count' => 80
        ]);

        Post::factory(7)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'มีโชคลาภ',
            'content' => 'พบเจอแต่สิ่งดี มีโชคลาภ วาสนา',
            'image_post' => './images/landmark/seedPost/7.webp',
            'likes_count' => 80
        ]);

        Post::factory(8)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'ไร้โรคภัย',
            'content' => 'เดินทางปลอดภัย ไร้โรคภัย ไร้กังวล',
            'image_post' => './images/landmark/seedPost/8.webp',
            'likes_count' => 80
        ]);

        Post::factory(9)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'เรียนเก่ง',
            'content' => 'สติปัญญาเฉียบคม เรียนเก่ง ประสบความสำเร็จ',
            'image_post' => './images/landmark/seedPost/9.webp',
            'likes_count' => 80
        ]);

        Post::factory(10)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'สัมฤทธิผล',
            'content' => 'คิดสิ่งใด สัมฤทธิผล พบเจอแต่คนดี',
            'image_post' => './images/landmark/seedPost/10.webp',
            'likes_count' => 80
        ]);

        Post::factory(11)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'มีความสุข',
            'content' => 'มีความสุข สุขภาพแข็งแรง อายุยืนยาว',
            'image_post' => './images/landmark/seedPost/11.webp',
            'likes_count' => 80
        ]);

        Post::factory(12)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'ใจสงบ ',
            'content' => 'ปราศจากโรคภัย ใจสงบ มั่นคง',
            'image_post' => './images/landmark/seedPost/12.webp',
            'likes_count' => 80
        ]);

        Post::factory(13)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'มีโชคลาภ',
            'content' => 'พบเจอแต่สิ่งดี มีโชคลาภ วาสนา',
            'image_post' => './images/landmark/seedPost/13.webp',
            'likes_count' => 80
        ]);

        Post::factory(14)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'ชีวิตราบรื่น',
            'content' => 'ชีวิตราบรื่น สมหวัง ปรารถนาสิ่งใดได้',
            'image_post' => './images/landmark/seedPost/14.webp',
            'likes_count' => 80
        ]);

        Post::factory(15)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'มิตรแท้',
            'content' => 'พบเจอแต่คนดี มิตรแท้ คอยช่วยเหลือ',
            'image_post' => './images/landmark/seedPost/15.webp',
            'likes_count' => 80
        ]);

        Post::factory(16)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'กิจการรุ่งเรือง',
            'content' => 'กิจการรุ่งเรือง ประสบความสำเร็จ เงินทองไหลมา',
            'image_post' => './images/landmark/seedPost/16.webp',
            'likes_count' => 80
        ]);

        Post::factory(17)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'สอบได้',
            'content' => 'ปัญญาเฉียบแหลม เรียนเก่ง สอบได้',
            'image_post' => './images/landmark/seedPost/17.webp',
            'likes_count' => 80
        ]);

        Post::factory(18)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'รักใคร่',
            'content' => 'ครอบครัวอบอุ่น รักใคร่ ปราศจากทุกข์',
            'image_post' => './images/landmark/seedPost/18.webp',
            'likes_count' => 80
        ]);

        Post::factory(19)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'ฝันเป็นจริง',
            'content' => 'ชีวิตมีเป้าหมาย มุ่งมั่น ฝันเป็นจริง',
            'image_post' => './images/landmark/seedPost/19.webp',
            'likes_count' => 80
        ]);

        Post::factory(20)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => 'ปลอดภัย',
            'content' => 'ขอพระองค์ทรงคุ้มครอง ปลอดภัย ไร้ภัยอันตราย',
            'image_post' => './images/landmark/seedPost/20.webp',
            'likes_count' => 80
        ]);
    }
}
